import Ember from 'ember';
import moment from 'moment';

export function formatDuration(params) {
  let duration = moment.duration(Math.abs(params[0].asMilliseconds()));
  let hours = Math.round(duration.asHours());
  let minutes = duration.minutes();
  let minutesString = minutes < 10 ? `0${minutes}`:`${minutes}`;

  return `${hours}h${minutesString}m`;
}

export default Ember.Helper.helper(formatDuration);
