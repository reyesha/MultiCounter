import {connect} from "react-redux";
import CounterSizeGenerator from "../components/CounterSizeGenerator";
import { updateCounterSize } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    updateCounterSize: (size) => {dispatch(updateCounterSize(size))}, 
})

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps) (CounterSizeGenerator)

export default CounterSizeGeneratorContainer;