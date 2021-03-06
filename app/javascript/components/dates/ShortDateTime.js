import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, intlShape } from 'react-intl';
import i18n from '../../common/i18n';

const ShortDateTime = ({ data }, context) => {
  const { date, defaultValue, seconds } = data;
  if (date) {
    const title = context.intl.formatRelative(date);
    const secondsFormat = seconds ? '2-digit' : undefined;

    return (
      <span title={title}>
        <FormattedDate
          value={date}
          day="2-digit"
          month="short"
          hour="2-digit"
          second={secondsFormat}
          minute="2-digit"
          timeZone={i18n.timezone}
        />
      </span>
    );
  }

  return <span>{defaultValue}</span>;
};

ShortDateTime.contextTypes = {
  intl: intlShape
};

ShortDateTime.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.any,
    defaultValue: PropTypes.string,
    seconds: PropTypes.bool
  })
};

export default ShortDateTime;
