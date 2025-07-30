import { RiseLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderWrapper}>
      <RiseLoader color="#f0e129" loading={true} size={25} />
    </div>
  );
}
