import { FC, ReactNode } from 'react';

interface ISection {
  title: string;
  children: ReactNode;
}

//or
// type SectionProps = {
//   title: string;
//   children: ReactNode;
// };

const Section: FC<ISection> = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;

//or

// export const Section = ({ children, title = "My Subheading" }: SectionProps or ISection ) => {
//   return (
//       <section>
//           <h2>{title}</h2>
//           <p>{children}</p>
//       </section>
//   )
// }
