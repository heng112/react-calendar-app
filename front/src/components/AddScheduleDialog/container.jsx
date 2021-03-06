import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { addScheduleCloseDialog,
        addScheduleSetValue,
        addScheduleStartEdit
} from "../../redux/addSchedule/actions";
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

// import { schedulesAddItem } from "../../redux/schedules/actions";

const mapStateToProps = state => ({schedule: state.addSchedule});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
      dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
      },
      saveSchedule: schedule => {
        // dispatch(schedulesAddItem(schedule));
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
      },
      setIsEditStart: () => {
        dispatch(addScheduleStartEdit());
      }
  });

  const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
      const {
        schedule: { form: schedule }
      } = stateProps;
      dispatchProps.saveSchedule(schedule);
    }
  });

export default connect(
    mapStateToProps, 
    mapDispatchToProps, 
    mergeProps
    )(AddScheduleDialog);
