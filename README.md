# iPhone 11 无线 CarPlay 供电底板（TPS5450 12V 转 5V / 4.2V）

专为车内隐蔽安装 **iPhone 11** 作为独立无线 CarPlay 主机设计的供电与开机触发底板。彻底解决原车 USB 供电不足导致的频繁重启与掉线问题，实现**上车 12V 通电自动开机、熄火自动断电**。

> **适用车型与车机：** 本板为通用 12V 车载供电方案，**不绑定单一车机型号**。大众 MQB（如帕萨特、迈腾）、奥迪、保时捷等任何**支持 CarPlay 且车内可取 12V ACC 电**的车型均可直接使用。

---

## 核心电路方案

* **主降压电路（12V → 5V）：** 采用 **TPS5450（5V / 5A 固定输出版）** 降压模块，尺寸 `40.64mm × 20.32mm`（标准 2.54mm 网格），提供充足电流余量。
* **自动开机触发（5V 路）：** 5V 直连卧式直插 `USB-A` 母座（D+ / D- 短接），通过短线接入 iPhone 11 尾插，实现上电自动触发开机。
* **假电池稳压供电（4.2V 路）：** 5V 经 `S5M / US5M` 硅二极管降压兼防倒灌，配合 `330Ω / 470Ω` 泄放电阻与 `4700uF / 10V` 低 ESR 电解电容吸收开机瞬时峰值电流，直接输出至电池保护板 `B+ / B-`。

## 关键元器件清单（BOM）

| 器件名称 | 规格 / 封装 | 作用说明 |
| :--- | :--- | :--- |
| **降压模块** | TPS5450（5V / 5A 固定版） | 主降压，12V 转 5V |
| **硅二极管** | S5M / US5M（SMC 封装，5A） | 降压至 ~4.2V 并防止电流倒灌 |
| **泄放电阻** | 330Ω 或 470Ω（0805 封装） | 稳定空载压降与断电泄放 |
| **滤波电容** | 4700uF / 10V（低 ESR 电解电容） | 稳压并扛住手机开机瞬时峰值电流 |
| **USB 接口** | 卧式直插 USB-A 母座 | 输出 5V 触发手机自动开机 |

## 嘉立创打板与上车前必测

1. **下载打板文件：** 前往本仓库 `gerber/` 目录（或右侧 **Releases** 附件）下载 Gerber 压缩包。
2. **嘉立创下单：** 直接上传 Gerber 文件至**嘉立创 PCB**，采用默认参数（板厚 `1.6mm`、铜厚 `1oz`）即可打板。

> **⚠️ 焊接与上车前必测（防烧机）：**
> 焊好降压模块、二极管、电阻、电容和 USB 母座后，**切勿直接接手机**！先通 `12V` 直流电进行空载测量：
> * `USB-A` 输出电压：约 **`5.0V`**
> * `B+ / B-` 输出电压：在 **`4.15V ~ 4.35V`** 之间
> 确认电压完全正常后，再焊接接入 iPhone 11 电池保护板。

## 仓库文件结构

* `index.tsx`：`tscircuit` PCB 设计源码
* `gerber/`：嘉立创 PCB 打板 Gerber 附件

## 工程视图

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/03a87976-5d2f-41ce-9db1-537c4d6db190" width="240" alt="3D 视图" /></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/0dfe9be9-2bbe-4194-b874-6898243d8989" width="240" alt="PCB 视图" /></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/a4b9a307-31be-4b79-9b0a-59a2d376dbcc" width="240" alt="原理图视图" /></td>
  </tr>
  <tr>
    <td align="center"><sub>3D 视图</sub></td>
    <td align="center"><sub>PCB 视图</sub></td>
    <td align="center"><sub>原理图视图</sub></td>
  </tr>
</table>
