import ProjectLayout, { Heading, Paragraph, Figure, FigureGrid } from '../../../../components/ProjectLayout/ProjectLayout'

// Demo page showing the project-page template in action: title/subtitle,
// headings, body text, a single centered figure, and a figure grid. Copy
// this file's structure for real project write-ups — swap in real copy,
// images, and a route in App.jsx.
export default function ExampleProject() {
  return (
    <ProjectLayout
      category="Hardware"
      categoryHref="/hardware"
      title="Example Project"
      subtitle="A template write-up showing headings, body text, and both single and grid image layouts."
    >
      <Heading>Overview</Heading>
      <Paragraph>
        This is a placeholder paragraph of body text. Replace it with a real project description —
        what you built, why, and what problem it solved. Paragraphs like this one are created with
        the <code>Paragraph</code> component.
      </Paragraph>
      <Paragraph>
        A second paragraph, to show how consecutive body text reads. Headings (like "Overview" above)
        are created with the <code>Heading</code> component, and can be repeated as many times as you
        need to break the write-up into sections.
      </Paragraph>

      <Figure
        src="/hardware/assets/imgs/aero.png"
        caption="Figure 1. A single, centered image with a caption — swap in a real photo or diagram."
      />

      <Heading>A Grid of Images</Heading>
      <Paragraph>
        Use <code>FigureGrid</code> to lay out two or more related images side by side, each with its
        own optional caption. It collapses to a single column on narrow screens.
      </Paragraph>

      <FigureGrid>
        <Figure src="/hardware/assets/imgs/sar.png" caption="Figure 2. First image in the grid." />
        <Figure src="/hardware/assets/imgs/frc.png" caption="Figure 3. Second image in the grid." />
      </FigureGrid>
    </ProjectLayout>
  )
}
