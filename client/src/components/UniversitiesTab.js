import {Tab, Tabs} from 'react-bootstrap'
import UniversitiesGrid from "./UniversitiesGrid";

function UniversitiesTab() {
    return (
        <Tabs
            defaultActiveKey="undergrad"
            transition={false}
            className="mb-3"
            style={{justifyContent: 'center'}}
        >
            <Tab eventKey="undergrad" title="Undergrad" style={{paddingBottom: 100}}>
                <UniversitiesGrid />
            </Tab>
            <Tab eventKey="graduate" title="Graduate">
                Tab content for Profile
            </Tab>
        </Tabs>
    )
}

export default UniversitiesTab