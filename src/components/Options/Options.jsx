import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div>
      <ul className={css.wraper}>
        <li>
          <button className={css.button} onClick={() => updateFeedback('good')}>
            Good
          </button>
        </li>
        <li>
          <button
            className={css.button}
            onClick={() => updateFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => updateFeedback('bad')}>
            Bad
          </button>
          {totalFeedback > 0 && (
            <button className={css.button} onClick={handleReset}>
              Reset
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Options;
