#  iPhone 11 无线 CarPlay 供电底板（TPS5450 5V / 4.2V）

本板是车载 iPhone 11 专用 12V 转 5V/4.2V 供电与开机触发底板，不绑定单一车机型号。
大众 MQB（如帕萨特、迈腾）及奥迪、保时捷等车型只要车机支持 CarPlay 且车内可取 12V 电即可使用。
车内隐蔽安装 **iPhone 11** 作为专用无线 CarPlay 主机：解决原车 USB 供电不足导致的重启问题，实现**上车 12V 自动通电开机、熄火自动断电**。



## 硬件方案说明

* **主降压模块：** TPS5450（5V / 5A 固定输出版，尺寸 `40.64mm × 20.32mm`，2.54mm 网格）
* **触发自动开机（5V 路）：** TPS5450 输出 5V 至卧式直插 `USB-A` 母座（D+ / D- 短接），插短线接 iPhone 11 尾插触发上电自启
* **假电池供 BMS（4.2V 路）：** 5V 串联 `S5M / US5M`（SMC 封装，5A）硅二极管降压兼防倒灌 + `330Ω / 470Ω`（0805）泄放电阻 + `4700uF / 10V` 低 ESR 电解电容扛开机瞬时峰值电流，输出接电池保护板 `B+ / B-`

## 嘉立创打板附件

* 打板文件位于本仓库 `gerber/` 目录（或右侧 **Releases** 附件中），下载后直接上传至 **嘉立创 PCB** 下单即可（板厚 1.6mm、铜厚 1oz 默认参数）。
* **焊接与上车前必测：** 先焊好降压模块、二极管、电阻、电容和 USB 母座，通 `12V` 空载测得 `USB` 为 `5.0V` 左右、`B+ / B-` 在 `4.15V ~ 4.35V` 之间，确认无误后再接 iPhone 11 保护板。

## 仓库文件

* `index.tsx`：`tscircuit` PCB 设计源码
* `gerber/`：嘉立创打板附件

### 工程视图

<img width="260" alt="3D 视图" src="https://github.com/user-attachments/assets/03a87976-5d2f-41ce-9db1-537c4d6db190" /> <img width="260" alt="PCB 视图" src="https://github.com/user-attachments/assets/0dfe9be9-2bbe-4194-b874-6898243d8989" /> <img width="260" alt="原理图视图" src="https://github.com/user-attachments/assets/a4b9a307-31be-4b79-9b0a-59a2d376dbcc" />
