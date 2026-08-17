import ProjectLayout, { Heading, Paragraph, Figure, FigureGrid, Table } from '../../../../components/ProjectLayout/ProjectLayout'

export default function DukeAeroSolids2526() {
  return (
    <ProjectLayout
      category="Hardware"
      categoryHref="/hardware"
      title="DukeAERO Solids 25-26"
      subtitle="Optimizing the solid-motor nozzle on DukeAERO's solid propulsion subteam for the 2025-26 school year"
    >
      <Paragraph>
        On the solid propulsion subteam I worked to optimize the team's rocket nozzle. The
        previous design (24-25 C) was a conical converging-diverging nozzle with converging
        and diverging half angles of 40 and 15 degrees respectively, and an expansion ratio
        of 4.49.
      </Paragraph>
      <Paragraph>
        To increase performance, I rederived all the required parameters starting from a chamber
        pressure of 590 PSI from last year's static hotfire and our known grain geometry. I
        found the mass flow rate, and used it to calculate the throat area. Then I calculated
        the exit Mach number based on the chamber pressure and ambient pressure (assuming sea
        level). I then calculated the expansion ratio, and the exit area.
      </Paragraph>
      <Paragraph>
        I found an optimal expansion ratio of 5.81, ~30% higher than last year. To test my calculations,
        I ran two simulations (Figures 1-1 and 1-2) in Ansys Fluent, one with last year's nozzle
        and one with my redesign (25-26 C), and compared the resultant exit pressure, exit velocity,
        and mass flow to calculate thrust and specific impulse for each.
      </Paragraph>

      <FigureGrid>
        <Figure src="/hardware/2025/aero/imgs/25-6_c_mach.png" caption="Figure 1-1. Revised conical nozzle Mach" />
        <Figure
          src="/hardware/2025/aero/imgs/25-6_c_pressure.png"
          caption="Figure 1-2. Revised conical nozzle static pressure"
        />
      </FigureGrid>

      <Paragraph>
        Altough gaining around 20N of thrust and 0.1s of ISP (Table 1-1), I continued research and found
        a series of journal entries written by an aerospace engineer, Gadicharla Rao, in the
        1960s, describing a method to increase performance by curving the walls of the diverging
        section. Using Rao's method, I designed a new "Rao" nozzle based on the previously calculated
        expansion ratio (25-26 R), and reran the simulations (Figures 1-3 and 1-4).
      </Paragraph>

      <FigureGrid>
        <Figure src="/hardware/2025/aero/imgs/25-6_r_mach.png" caption="Figure 1-3. Revised Rao nozzle Mach" />
        <Figure
          src="/hardware/2025/aero/imgs/25-6_r_pressure.png"
          caption="Figure 1-4. Revised Rao nozzle static pressure"
        />
      </FigureGrid>

      <Paragraph>
        This time I gained around 70N of thrust and 2.6s of ISP (Table 1-1) over the optimized
        conical nozzle. Although there is a larger performance gain, the increase in manufacturing
        complexity might outweigh the small boost in performance.
      </Paragraph>

      <Table
        headers={['Name', 'Exit Pressure (Pa)', 'Exit Mach', 'Exit Velocity (m/s)', 'Mass Flow (kg/s)', 'Thrust (N)', 'ISP (s)']}
        rows={[
          ['24-25 C', '38983', '2.718', '2340', '2.418', '5837', '246.3'],
          ['25-26 C', '-2459', '2.904', '2422', '2.423', '5853', '246.5'],
          ['25-26 R', '-3083', '2.917', '2449', '2.428', '5926', '249.1'],
        ]}
        caption="Table 1-1: Performance from Ansys Fluent runs of the three nozzles"
      />

      <Paragraph>
        Once I had the results of the tests, I created CAD models of both of the two new nozzles.
        They each consist of a graphite throat with a phenolic structure and aluminum nozzle
        washer. The converging sections are identical, with only the diverging sections differing
        between the conical and Rao nozzles.
      </Paragraph>

      <FigureGrid>
        <Figure src="/hardware/2025/aero/imgs/25-6_c.png" caption="Figure 1-5. CAD of the conical nozzle" />
        <Figure src="/hardware/2025/aero/imgs/25-6_r.png" caption="Figure 1-6. CAD of the Rao nozzle" />
      </FigureGrid>
    </ProjectLayout>
  )
}
