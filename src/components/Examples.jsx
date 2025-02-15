import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
import Section from "./Section";
import {useState} from 'react'
export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState('');
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }
    let tabContent = <p>Please select a button.</p>;
    if(selectedTopic){
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
        )
    }
    let buttons=
          (<menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>)
    return(
        <Section title="Examples" id="examples">
          <Tabs buttons={buttons} ButtonContainer="menu">
            {tabContent}
          </Tabs>
          
          
            {/* { (!selectedTopic) ? 
            'Please select a button'
            :
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
        } */}
        </Section>
    );
}