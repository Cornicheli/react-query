import { LabelPicker } from '../components/LabelPicker';
import { IssueList } from '../components/IssueList';
import { Label } from '../interfaces/label';
import { useState } from 'react';


export const ListView = () => {

  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  const onLabelChange = (labelName: string) => {

    (selectedLabels.includes(labelName))

      ? setSelectedLabels(selectedLabels.filter(label => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName])

    console.log(selectedLabels)

  }

  return (
    <div className="row mt-5">

      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  )
}
