import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">About</h4>
                <p>Feel free to send feedback on the wiki to me:</p>
                <p><b>Email: </b><a href="mailto:igorcampos@protonmail.com?subject=Wiki Feedback">igorcampos@protonmail.com</a></p>
                <p><b>Discord: </b> Yun#2052</p>
                <ul className="collection">
                    <li className="collection-header"><b>TODO List:</b></li>
                    <li className="collection-item">Yeah images, I have them here, but it takes a lot of time to link them to the mobs and items</li>
                    <li className="collection-item">I'm aware of the Bellator loot table by level, it will be fixed later</li>
                    <li className="collection-item">Conditions list / detail</li>
                    <li className="collection-item">Achieviments list / detail</li>
                    <li className="collection-item">Fuzzy search bar</li>
                    <li className="collection-item">Tabs to jump to categories on mobile</li>
                    <li className="collection-item">Breadcrumbs</li>
                    <li className="collection-item">Add image to items and monsters</li>
                    <li className="collection-item">Updated world map</li>
                    <li className="collection-item">XP Table</li>
                    <li className="collection-item">Contact form for this page</li>
                    <li className="collection-item">Calc how much it takes to LV up</li>
                    <li className="collection-item">Calc the approximate loot you will get in X time killing X mob</li>
                    <li className="collection-item">Calc for how much materials you need to upgrade equipment based on mob</li>
                </ul>
            </div>
        )
    }
}

export default About