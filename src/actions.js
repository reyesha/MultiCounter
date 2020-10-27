export const updateCounterSize = size => {
    return {type: "UPDATE_COUNTER_SIZE", payload: size};
}

export const increaseSum = () => {
    return {type: "INCREASE_SUM"}
}

export const decreaseSum = () => {
    return {type: "DECREASE_SUM"}
}

export const resetSum = () => {
    return {type: "RESET_SUM"}
}