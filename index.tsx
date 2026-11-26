import React from "react"

// 40.64mm x 20.32mm TPS5450 模块精准封装（2.54mm 标准网格）
const Tps5450ModuleFootprint = () => {
  const pads = [
    { y: 7.62, h: 2.6 },  // 顶部大焊盘 (GND)
    { y: 3.81, h: 1.6 },  // 中间圆孔 1 (GND)
    { y: 1.27, h: 1.6 },  // 中间圆孔 2 (GND)
    { y: -1.27, h: 1.6 }, // 中间圆孔 3 (左EN / 右VOUT)
    { y: -3.81, h: 1.6 }, // 中间圆孔 4 (左VIN / 右VOUT)
    { y: -7.62, h: 2.6 }, // 底部大焊盘 (左VIN / 右VOUT)
  ]
  return (
    <footprint>
      <silkscreenrect
        pcbX={0}
        pcbY={0}
        width="40.64mm"
        height="20.32mm"
        strokeWidth="0.15mm"
      />
      <silkscreentext
        text="TPS5450 5V/5A"
        pcbX={0}
        pcbY={3}
        fontSize="1.6mm"
      />
      <silkscreentext
        text="IN  --->  OUT"
        pcbX={0}
        pcbY={-3}
        fontSize="1.6mm"
      />
      <silkscreentext text="GND" pcbX={-13.5} pcbY={4.5} fontSize="1.1mm" />
      <silkscreentext text="VIN" pcbX={-13.5} pcbY={-6} fontSize="1.1mm" />
      <silkscreentext text="GND" pcbX={13.5} pcbY={4.5} fontSize="1.1mm" />
      <silkscreentext text="VOUT" pcbX={13.0} pcbY={-4.5} fontSize="1.1mm" />

      {/* 左侧 6 脚：上到下 GND, GND, GND, EN, VIN, VIN */}
      {pads.map((p, idx) => (
        <smtpad
          key={`L${idx + 1}`}
          shape="rect"
          width="3.4mm"
          height={`${p.h}mm`}
          pcbX={-19.5}
          pcbY={p.y}
          portHints={[`pin${idx + 1}`]}
        />
      ))}
      {/* 右侧 6 脚：上到下 GND, GND, GND, VOUT, VOUT, VOUT */}
      {pads.map((p, idx) => (
        <smtpad
          key={`R${idx + 7}`}
          shape="rect"
          width="3.4mm"
          height={`${p.h}mm`}
          pcbX={19.5}
          pcbY={p.y}
          portHints={[`pin${idx + 7}`]}
        />
      ))}
    </footprint>
  )
}

// 标准正向卧式直插 USB-A 母座（舌片在上，开口朝右：上 GND，下 VBUS）
const UsbAFemaleFootprint = () => (
  <footprint>
    <silkscreenrect
      pcbX={0}
      pcbY={0}
      width="14mm"
      height="13.5mm"
      strokeWidth="0.15mm"
    />
    <silkscreentext text="OUT: USB 5V" pcbX={0.5} pcbY={0} fontSize="1.1mm" />
    <silkscreentext text="GND" pcbX={-8.2} pcbY={3.5} fontSize="1.0mm" />
    <silkscreentext text="5V" pcbX={-8.0} pcbY={-3.5} fontSize="1.0mm" />

    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="1.8mm"
      pcbX={-5.5}
      pcbY={3.5}
      portHints={["pin4"]} // GND (上)
    />
    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="1.8mm"
      pcbX={-5.5}
      pcbY={1.0}
      portHints={["pin3"]} // D+
    />
    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="1.8mm"
      pcbX={-5.5}
      pcbY={-1.0}
      portHints={["pin2"]} // D-
    />
    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="1.8mm"
      pcbX={-5.5}
      pcbY={-3.5}
      portHints={["pin1"]} // VBUS +5V (下)
    />
    {/* 两侧金属外壳固定脚 */}
    <platedhole
      shape="circle"
      holeDiameter="2.3mm"
      outerDiameter="3.4mm"
      pcbX={-2.8}
      pcbY={6.57}
      portHints={["pin5"]}
    />
    <platedhole
      shape="circle"
      holeDiameter="2.3mm"
      outerDiameter="3.4mm"
      pcbX={-2.8}
      pcbY={-6.57}
      portHints={["pin6"]}
    />
  </footprint>
)

// 2Pin 大电流焊盘（支持直接焊 18AWG 粗线或 5.08mm 端子）
const PowerPad2PinFootprint = ({
  topLabel,
  botLabel,
}: {
  topLabel: string
  botLabel: string
}) => (
  <footprint>
    <silkscreentext text={topLabel} pcbX={0} pcbY={5.8} fontSize="1.1mm" />
    <silkscreentext text={botLabel} pcbX={0} pcbY={-5.8} fontSize="1.1mm" />
    <platedhole
      shape="circle"
      holeDiameter="1.8mm"
      outerDiameter="3.6mm"
      pcbX={0}
      pcbY={2.54}
      portHints={["pin1"]}
    />
    <platedhole
      shape="circle"
      holeDiameter="1.8mm"
      outerDiameter="3.6mm"
      pcbX={0}
      pcbY={-2.54}
      portHints={["pin2"]}
    />
  </footprint>
)

// 4700uF/10V 直插电解电容（预留 13mm 直径安全外框，脚距 5mm）
const RadialCap5mmFootprint = () => (
  <footprint>
    <silkscreencircle pcbX={0} pcbY={0} radius="6.5mm" strokeWidth="0.15mm" />
    <silkscreentext text="4700uF" pcbX={0} pcbY={8.0} fontSize="1.2mm" />
    <silkscreentext text="+" pcbX={-3.2} pcbY={2.5} fontSize="1.6mm" />
    <silkscreentext text="-" pcbX={-3.2} pcbY={-2.5} fontSize="1.6mm" />
    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="2.4mm"
      pcbX={0}
      pcbY={2.5}
      portHints={["pin1"]} // 正极
    />
    <platedhole
      shape="circle"
      holeDiameter="1.0mm"
      outerDiameter="2.4mm"
      pcbX={0}
      pcbY={-2.5}
      portHints={["pin2"]} // 负极
    />
  </footprint>
)

export default () => (
  <board width="100mm" height="44mm">
    {/* 1. 左侧：12V 车载输入 */}
    <chip
      name="J_IN"
      pcbX={-42}
      pcbY={0}
      footprint={
        <PowerPad2PinFootprint topLabel="IN: GND-" botLabel="IN: 12V+" />
      }
      pinLabels={{ pin1: "GND", pin2: "VIN_12V" }}
    />

    {/* 2. 中左：TPS5450 5V/5A 模块 */}
    <chip
      name="U_BUCK"
      pcbX={-12}
      pcbY={0}
      footprint={<Tps5450ModuleFootprint />}
      pinLabels={{
        pin1: "GND_L1",
        pin2: "GND_L2",
        pin3: "GND_L3",
        pin4: "EN",
        pin5: "VIN1",
        pin6: "VIN2",
        pin7: "GND_R1",
        pin8: "GND_R2",
        pin9: "GND_R3",
        pin10: "VOUT1",
        pin11: "VOUT2",
        pin12: "VOUT3",
      }}
    />

    {/* 3. 右上：USB-A 母座 */}
    <chip
      name="J_USB"
      pcbX={42}
      pcbY={10}
      footprint={<UsbAFemaleFootprint />}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
        pin5: "SHIELD1",
        pin6: "SHIELD2",
      }}
    />

    {/* 4. 中右：5V -> 4.2V 硅二极管 D1（SMC 封装，S5M / US5M） */}
    <diode
      name="D1"
      footprint="smc"
      pcbX={16}
      pcbY={-7}
      pcbRotation={-90}
    />

    {/* 5. 泄放电阻 470Ω */}
    <resistor
      name="R_BLEED"
      resistance="470ohm"
      footprint="0805"
      pcbX={16}
      pcbY={-16.5}
    />

    {/* 6. 储能电容 4700uF */}
    <chip
      name="C_OUT"
      pcbX={29}
      pcbY={-10}
      footprint={<RadialCap5mmFootprint />}
      pinLabels={{ pin1: "POS", pin2: "NEG" }}
    />

    {/* 7. 右下：iPhone 11 保护板输出 B+ / B- */}
    <chip
      name="J_BMS"
      pcbX={43}
      pcbY={-10}
      footprint={
        <PowerPad2PinFootprint topLabel="OUT: B+ 4.2V" botLabel="OUT: B- GND" />
      }
      pinLabels={{ pin1: "B_PLUS", pin2: "B_MINUS" }}
    />

    {/* ==================== 大电流电源走线 ==================== */}

    {/* 12V 输入 */}
    <trace from=".J_IN > .VIN_12V" to=".U_BUCK > .VIN1" thickness="2.0mm" />
    <trace from=".U_BUCK > .VIN1" to=".U_BUCK > .VIN2" thickness="2.0mm" />

    {/* 5V 输出 -> USB-A 5V & D1 阳极 */}
    <trace from=".U_BUCK > .VOUT1" to=".U_BUCK > .VOUT2" thickness="2.2mm" />
    <trace from=".U_BUCK > .VOUT2" to=".U_BUCK > .VOUT3" thickness="2.2mm" />
    <trace from=".U_BUCK > .VOUT1" to=".J_USB > .VBUS" thickness="1.5mm" />
    <trace from=".U_BUCK > .VOUT3" to=".D1 > .anode" thickness="2.2mm" />

    {/* USB D+ 与 D- 短接（DCP 充电识别） */}
    <trace from=".J_USB > .DP" to=".J_USB > .DM" thickness="0.3mm" />

    {/* 4.2V 主干输出 -> 电容 & B+ */}
    <trace from=".D1 > .cathode" to=".C_OUT > .POS" thickness="2.2mm" />
    <trace from=".C_OUT > .POS" to=".J_BMS > .B_PLUS" thickness="2.2mm" />
    <trace from=".D1 > .cathode" to=".R_BLEED > .pin1" thickness="0.6mm" />

    {/* 全板共地 GND */}
    <trace from=".J_IN > .GND" to=".U_BUCK > .GND_L1" thickness="2.2mm" />
    <trace from=".U_BUCK > .GND_L1" to=".U_BUCK > .GND_L2" thickness="2.2mm" />
    <trace from=".U_BUCK > .GND_L2" to=".U_BUCK > .GND_L3" thickness="2.2mm" />
    <trace from=".U_BUCK > .GND_L1" to=".U_BUCK > .GND_R1" thickness="2.2mm" />
    <trace from=".U_BUCK > .GND_R1" to=".U_BUCK > .GND_R2" thickness="2.2mm" />
    <trace from=".U_BUCK > .GND_R2" to=".U_BUCK > .GND_R3" thickness="2.2mm" />

    {/* GND 回流路径 A */}
    <trace from=".U_BUCK > .GND_R1" to=".J_USB > .GND" thickness="1.8mm" />
    <trace from=".J_USB > .GND" to=".J_USB > .SHIELD1" thickness="1.5mm" />
    <trace from=".J_USB > .GND" to=".J_USB > .SHIELD2" thickness="1.8mm" />
    <trace from=".J_USB > .SHIELD2" to=".J_BMS > .B_MINUS" thickness="2.2mm" />

    {/* GND 回流路径 B */}
    <trace from=".U_BUCK > .GND_R3" to=".C_OUT > .NEG" thickness="2.2mm" />
    <trace from=".C_OUT > .NEG" to=".J_BMS > .B_MINUS" thickness="2.2mm" />
    <trace from=".C_OUT > .NEG" to=".R_BLEED > .pin2" thickness="0.6mm" />
  </board>
)
