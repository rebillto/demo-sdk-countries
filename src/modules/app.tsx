import { useEffect, useState } from "react";
import SelectCountry from "../components/SelectCountry.component";
import { Checkout, useRebill } from "rebill-react";
import { countries, customerMap } from "./app.helper";

function App() {
  const { sdk, setTransaction, setCustomer } = useRebill();
  const [countrySelected, setCountrySelected] = useState(countries[0]);

  useEffect(() => {
    const currency = countrySelected.currency;
    const customer = customerMap[currency];
    setTransaction({
      id: "1ca5b4cb-23f9-4695-a275-ff5443e2b3b1",
      currency,
    });

    setCustomer(customer);
  }, [sdk, countrySelected]);

  return (
    <>
      <div className="w-[50rem] min-h-[34rem] border-2 mt-20 mx-auto rounded">
        <div className="w-full p-4 bg-slate-200">
          <SelectCountry
            setSelected={setCountrySelected}
            selected={countrySelected}
          />
        </div>
        <div className="w-[600px] mx-auto mt-10">
          <Checkout />
        </div>
      </div>
    </>
  );
}

export default App;
