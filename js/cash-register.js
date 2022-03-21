function checkCashRegister(price, cash, cid) {

    let change = [];
    let x = {}

    const baseUnits = [["PENNY", .01], ["NICKEL", .05], ["DIME", .1], ["QUARTER", .25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
    let money = cid.reverse()
    let cashBack = cash - price

    let tValue = []
    //get cash on hand values
    cid.forEach(i => { tValue.push(i[1]) })

    //total cash on hand
    let tCash = tValue.reduce((a, b) => { return a + b }).toFixed(2)

    //get base units and values
    let units = baseUnits.reverse()
    let getBaseUnits = (cb) => {
        let cashBack = Number(cb).toFixed(2)
        let ub = units
        for (let [k, v] of Object.entries(ub)) {
            let unit = v[0]
            let value = v[1]
            let quantity = Math.trunc(cashBack / v[1])
            if (quantity > 0) {
                units.splice(0, 1)
                return { unit, value, quantity }
            }
            units.splice(0, 1)
        }
    }
    //get register units and values
    let getMoney = (u) => {
        let um = money
        let unit = u
        for (let [k, v] of Object.entries(um)) {
            let mUnit = v[0]
            let mValue = v[1]
            if (mUnit === unit) {
                money.splice(0, 1)
                return { mUnit, mValue }
            }
            money.splice(0, 1)

        }
    }

    let returnChange = (cb) => {
        let cashBack = Number(cb).toFixed(2)
        if (Number(cashBack) === 0) {
            Object.assign(x,{status: "OPEN", change: change})
            
            return x
        } else if (Number(cashBack) === Number(tCash)) {
            Object.assign(x,{status: "CLOSED", change: cid.reverse()})
            
            return x
        } else if ((Number(cashBack) > Number(tCash) || Number(units.length) === 0)) {
            Object.assign(x,{status: "INSUFFICIENT_FUNDS", change:[]})
            
            return x
        } else {
            let { unit, value, quantity } = getBaseUnits(cb)
            let { mUnit, mValue } = getMoney(unit)
            if (mValue > (value * quantity)) {
                change.push([mUnit, (value * quantity)])
                cashBack = Number(cashBack - (value * quantity)).toFixed(2)
            }
            if (mValue < (value * quantity) && mValue !== 0) {
                change.push([mUnit, mValue])
                cashBack = Number(cashBack - mValue).toFixed(2)
            }
            returnChange(cashBack)
        }
    }
    
   returnChange(cashBack)
   console.log(x)
   return x
}
