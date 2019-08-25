export function userActionIn(e) {
  return (e.operation.amount > 16666.66666666) ?
   '5.00' :
  (e.operation.amount * 0.0003).toString()
}

export function userActionOut(e) {
  return (e.user_type == "natural") ?
  (e.operation.amount <= 1000.00) ?
  (e.operation.amount * 0.003).toString() :
  ((e.operation.amount - 1000) * 0.003).toString() :
  (e.operation.amount * 0.003).toString()
}
