import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

interface BAccordionProps {
  data: {
    title: any;
    content: any;
  }[];
}

const BAccordion = (props: BAccordionProps) => {
  const { data = [] } = props;
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((item, index) => (
        <AccordionItem value={"accordion-" + index} key={index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BAccordion;
