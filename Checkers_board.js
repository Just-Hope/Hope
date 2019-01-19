function toggle(cell) {
    console.log('toggling cell: ', cell)
    // console.log('children: ', cell.children)
    // console.log('red checker: ', cell.children[0])
    // console.log('black checker: ', cell.children[1])
    let redChecker = cell.children[0]
    let blackChecker = cell.children[1]

    if(!redChecker.hidden && blackChecker.hidden) {
        redChecker.hidden = true
        blackChecker.hidden = false
    } else if(redChecker.hidden && !blackChecker.hidden){
        redChecker.hidden = true
        blackChecker.hidden = true
    } else if(redChecker.hidden && blackChecker.hidden) {
        redChecker.hidden = false
        blackChecker.hidden = true
    }

}