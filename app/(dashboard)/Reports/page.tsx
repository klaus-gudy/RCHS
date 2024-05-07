import BoyBmiStatistics from "@/app/components/graphs/patient-bmi-age-boys";
import GirlBmiStatistics from "@/app/components/graphs/patient-bmi-age-girls";
import BoyStatistics from "@/app/components/graphs/patient-length-age-boys";
import GirlStatistics from "@/app/components/graphs/patient-length-age-girls";
import BoyWeightStatistics from "@/app/components/graphs/patient-weight-age-boys";
import GirlWeightStatistics from "@/app/components/graphs/patient-weight-age-girls";

export default function Reports() {
  return (
    <>
      <BoyStatistics />
      <GirlStatistics />
      <BoyWeightStatistics />
      <GirlWeightStatistics />
      <BoyBmiStatistics />
      <GirlBmiStatistics />
    </>
  );
}
