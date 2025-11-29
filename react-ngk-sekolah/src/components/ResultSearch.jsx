import { Card } from "./Card";

const ResultSearch = ({getData})=>{
  const {dataSekolah} = getData

    return (
      <div id="resultContainer" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        <Card sekolah={dataSekolah}/>
      </div>
    );
}

export default ResultSearch