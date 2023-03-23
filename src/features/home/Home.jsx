import Header from '../../components/header/header';
import ProductListContainer from '../product/containers/ProductList-containers';
import { Div } from '../../_assets/home-styled';
export default function Home() {
  return (
    <div>
      <Header />
      <Div>
        <ProductListContainer />
      </Div>
    </div>
  );
}
