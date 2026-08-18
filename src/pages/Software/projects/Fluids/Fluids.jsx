import ProjectLayout, { Heading, Paragraph, Figure, FigureGrid, Video } from '../../../../components/ProjectLayout/ProjectLayout'

export default function Fluids() {
  return (
    <ProjectLayout
      category="Software"
      categoryHref="/software"
      title="Fluids"
      subtitle="Eulerian fluid simulation written in Julia"
    >
      <Heading>Overview</Heading>
      <Paragraph>
        This project simulates fluid flow using an Eulerian grid-based method, written in{' '}
        <a href="https://julialang.org/" target="_blank" rel="noreferrer">Julia</a> using{' '}
        <a href="https://makie.org/website/" target="_blank" rel="noreferrer">Makie.jl</a> for plotting
        (<a href="https://github.com/echotops/fluid" target="_blank" rel="noreferrer">source on GitHub</a>).
        The repository contains two main files: the simulation itself in <code>fluid.jl</code>, and
        a script, <code>generate_cells.jl</code>, that reads an image and outputs a grid of cells.
        The simulation works by assigning each cell in a grid to open (1) or closed (0), tracking a
        single flow value along each cell edge. Each timestep first advects velocities into their
        new cells, then relaxes the field until it's divergence-free; a separate smoke advection
        step pulls smoke into new cells based on the resulting velocity field (Figure 1-1).
      </Paragraph>

      <Video
        src="/software/projects/fluids/vids/circle.mp4"
        caption="Figure 1-1. Fluid flow around a circle"
      />

      <Heading>Grid Generation</Heading>
      <Paragraph>
        The grid of cells can be generated either by hand or from a black-and-white image, where
        the image's resolution becomes the simulation's resolution. Black cells are read as solid
        (0) and white cells as open (1), with the cutoff at a brightness of 0.5. The image in
        Figure 2-1 generates the grid used for the simulation in Figure 2-2.
      </Paragraph>

      <FigureGrid>
        <Figure src="/software/projects/fluids/imgs/f1.png" caption="Figure 2-1. Image used to generate the grid" />
        <Video
          src="/software/projects/fluids/vids/f1car.mp4"
          caption="Figure 2-2. Simulation run with the grid from Figure 2-1"
        />
      </FigureGrid>

      <Paragraph>Here's a simulation run with a less streamlined object (Figure 2-3).</Paragraph>

      <Video
        src="/software/projects/fluids/vids/perppeep.mp4"
        caption="Figure 2-3. Fluid flow around a peep"
      />
    </ProjectLayout>
  )
}
