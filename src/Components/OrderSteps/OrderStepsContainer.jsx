import React, { useContext } from 'react';
import CarsContainer from '../Cars';
import Location from '../Location';
import Context from '../../context';
// import ExtendsContainer from '../Extends';

export default function OrderStepsContainer() {
  const { step } = useContext(Context);

  return (
    <>
      {step === 0 && <Location />}
      {step === 1 && <CarsContainer />}
      {/* {step === 2 && <ExtendsContainer />} */}
      {/* {step === 2 && <Summary />}
      {step === 3 && <SummaryModal />}
      {step === 4 && <Finally />} */}
    </>
  );
}
