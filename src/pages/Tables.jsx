import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
import TableThree from '../components/TableThree';
import TableTwo from '../components/TableTwo';
import ApplicantsTable from '../components/ApplicantsTables';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <ApplicantsTable />
        {/* <TableOne />
        <TableTwo />
        <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
