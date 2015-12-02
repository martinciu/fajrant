import Ember from 'ember';
import moment from 'moment';

export function formatDuration(params) {
  let duration = params[0];
  let hours = Math.round(duration.asHours());
  let minutes = duration.minutes();
  let minutesString = minutes < 10 ? `0${minutes}`:`${minutes}`;
  let seconds = duration.seconds();
  let secondsString = seconds < 10 ? `0${seconds}`:`${seconds}`;

  return `${hours}:${minutesString}:${secondsString}`;
}

export default Ember.Helper.helper(formatDuration);
