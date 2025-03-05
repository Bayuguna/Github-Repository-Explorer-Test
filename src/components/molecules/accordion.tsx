import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

interface BAccordionProps {
  data: {
    title: string;
    content: any;
  }[];
}

const BAccordion = (props: BAccordionProps) => {
  const { data = [] } = props;
  return (
    <Accordion type="single" collapsible className="w-full">
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
