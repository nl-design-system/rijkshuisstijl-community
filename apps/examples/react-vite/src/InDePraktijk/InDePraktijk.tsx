import { CardAsLink, Heading } from "@rijkshuisstijl-community/components-react";
import './InDePraktijk.css';


export function InDePraktijk(){
    return (
        <>
        <Heading appearanceLevel={1} level={1}>
            In de praktijk
          </Heading>
        <div className="card-praktijk" >
            <CardAsLink
              appearance="horizontal"
              heading="React"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="src/placeholder.jpg"
              title="Card Title"
            />
            <CardAsLink
              appearance="horizontal"
              heading="CSS"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="src/placeholder.jpg"
              title="Card Title"
            />
            <CardAsLink
              appearance="horizontal"
              heading="Web Components"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="src/placeholder.jpg"
              title="Card Title"
            />

            <CardAsLink
              appearance="horizontal"
              heading="Design Tokens"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="src/placeholder.jpg"
              title="Card Title"
            />

            <CardAsLink
              appearance="horizontal"
              heading="Spring bord"
              href="#"
              imageAlt="Placeholder Image"
              imageSrc="src/placeholder.jpg"
              title="Card Title"
            />
        </div>
        </>
    )
}