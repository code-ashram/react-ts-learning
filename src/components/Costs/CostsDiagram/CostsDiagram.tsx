// import {FC} from "react";
import Diagram from "../../Diagram/Diagram.tsx";

// type Props = {
//     costs:
// }
// :FC<Props>

const CostsDiagram = ({costs}) => {
    // const diagramDataSets = [
    //     {label: 'Jan', value: 0},
    //     {label: 'Feb', value: 0},
    //     {label: 'Mar', value: 0},
    //     {label: 'Apr', value: 0},
    //     {label: 'Jun', value: 0},
    //     {label: 'May', value: 0},
    //     {label: 'Jul', value: 0},
    //     {label: 'Aug', value: 0},
    //     {label: 'Sep', value: 0},
    //     {label: 'Oct', value: 0},
    //     {label: 'Nov', value: 0},
    //     {label: 'Dec', value: 0},
    // ]
    //
    // for (const cost of costs) {
    //     const costMonth = cost.date.getMonth();
    //     diagramDataSets[costMonth].value += cost.amount
    //     console.log(cost)
    // }

    const diagramDataTemplates = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'Jun', value: 0},
        {label: 'May', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    const diagramDataSets = diagramDataTemplates.map((template) => {
       return costs.reduce((cost) => )
    })

    // const diagramDataSets = diagramDataTemplates.map((template) => ({
    //     label: template.label,
    //     value: template.value + 2
    // }))


    console.log(diagramDataSets)

    return <Diagram dataSets={diagramDataSets}/>
}

export default CostsDiagram
