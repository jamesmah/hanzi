import React, { useMemo, Fragment } from "react";
import styled from "styled-components";
import { ICharacter } from "../../数据";

interface 字表组件Props {
  characters: ICharacter[];
}

interface CharacterGroup {
  minStrokes: number;
  maxStrokes: number;
  characters: ICharacter[];
}

const 字表组件: React.FC<字表组件Props> = ({ characters }) => {
  const groups: CharacterGroup[] = useMemo(() => {
    const additionalStrokesArray = characters
      .map((char) => char.additionalStrokes)
      .filter((strokes, index, arr) => arr.indexOf(strokes) === index)
      .sort((a, b) => a - b);

    const groupsLocal: CharacterGroup[] = [];

    additionalStrokesArray.forEach((num) => {
      const currentChars = characters.filter(
        (char) => char.additionalStrokes === num
      );

      if (groupsLocal.length > 0) {
        const lastGroup = groupsLocal[groupsLocal.length - 1];
        if (
          lastGroup.maxStrokes !== 0 &&
          (lastGroup.characters.length + currentChars.length <= 6 ||
            (lastGroup.characters.length <= 5 && currentChars.length <= 2) ||
            (lastGroup.characters.length <= 2 && currentChars.length <= 5) ||
            (lastGroup.characters.length <= 7 && currentChars.length <= 1) ||
            (lastGroup.characters.length <= 1 && currentChars.length <= 7))
        ) {
          lastGroup.maxStrokes = num;
          lastGroup.characters = [...lastGroup.characters, ...currentChars];
          return;
        }
      }

      groupsLocal.push({
        minStrokes: num,
        maxStrokes: num,
        characters: characters.filter((char) => char.additionalStrokes === num)
      });
    });

    return groupsLocal;
  }, [characters]);

  return (
    <>
      {groups.map((group, index) => (
        <Fragment key={index}>
          {characters.length >= 10 && group.maxStrokes > 0 && (
            <h3>
              画{group.minStrokes}
              {group.minStrokes !== group.maxStrokes
                ? `-${group.maxStrokes}`
                : ""}
            </h3>
          )}
          {group.characters.map((char) => (
            <p key={char.character}>
              {char.character}: {char.pinyins.join(", ")}:{" "}
              <SmallText>{char.translations.join("; ")}</SmallText>
            </p>
          ))}
        </Fragment>
      ))}
    </>
  );
};

const SmallText = styled.span`
  font-size: 0.5rem;
`;

export default 字表组件;
