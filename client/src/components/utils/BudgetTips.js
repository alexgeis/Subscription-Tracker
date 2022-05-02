import {budgetTips} from "../../datasets/budgetTips";

function BudgetTips() {
  const tipChosen = budgetTips[Math.floor(Math.random() * budgetTips.length)]
  const tip = {
    title: tipChosen.slice(0, tipChosen.indexOf(':') + 1),
    body: tipChosen.slice(tipChosen.indexOf(':') + 1)
  }
  return (
    <>
        <p className="budgetTips"><span className="bold">{tip.title}</span>{tip.body}</p>
    </>
  )
}

export default BudgetTips

