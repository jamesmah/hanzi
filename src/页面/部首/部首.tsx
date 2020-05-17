import React, { useMemo } from "react";
import 按钮 from "react-bootstrap/Button";
import 容器 from "react-bootstrap/Container";
import 行列 from "react-bootstrap/Row";
import 部首数据 from "../../数据/部首数据";
import 主标头 from "../../组件/主标头";
import { 有序列表, 段落, 列表项目, 链接, 分区 } from "../../组件/基本元素";

const 部首 = () => {
  const 数据网址 = useMemo(() => {
    return (
      "data:application/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(部首数据, null, 2))
    );
  }, []);

  return (
    <>
      <主标头 />
      <容器 fluid>
        <行列>
          <链接 href={数据网址} download="部首数据.json">
            <按钮>下载数据</按钮>
          </链接>
        </行列>
        {部首数据.map((部首对象) => (
          <分区>
            <段落>画{部首对象.笔画数}</段落>
            <有序列表>
              {部首对象.部首数组.map((部首) => (
                <列表项目>
                  {部首.字}: {部首.名称}
                </列表项目>
              ))}
            </有序列表>
          </分区>
        ))}
      </容器>
    </>
  );
};

export default 部首;
