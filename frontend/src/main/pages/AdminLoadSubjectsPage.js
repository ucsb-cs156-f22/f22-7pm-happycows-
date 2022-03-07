import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
//import UCSBSubjectForm from "main/components/UCSBSubjects/UCSBSubjectForm";
import { Navigate } from "react-router-dom";
import { useBackendMutation } from "main/utils/useBackend";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

export default function AdminLoadSubjectsPage() {                     //NOT DONE
  const objectToAxiosParams = (ucsbSubject) => ({
    url: "/api/ucsbsubjects/post",
    method: "POST",
    params: {
      subjectCode: ucsbSubject.subjectCode,
      subjectTranslation: ucsbSubject.subjectTranslation,
      deptCode: ucsbSubject.deptCode,
      collegeCode: ucsbSubject.collegeCode,
      relatedDeptCode: ucsbSubject.relatedDeptCode,
      inactive: ucsbSubject.inactive,
    },
  });
/*   
  const onSuccess = (ucsbSubject) => {
    toast(
      `The amount of new Subjects Created : ${ucsbSubject.id}`
    );
  };
                                                   //trying out these
    const mutation = useBackendMutation(
      objectToAxiosParams,
      { onSuccess },
      // Stryker disable next-line all : hard to set up test for caching
      ["/api/ucsbsubjects/all"]
    );
  
    const { isSuccess } = mutation;
  
    const onSubmit = async (data) => {
      mutation.mutate(data);
    };
  
    if (isSuccess) {
      return <Navigate to="/ucsbsubjects/list" />;
    }
 
  function update() {
    reload = location.reload();
  }
  //get new list, get old - find delta. could loop through new set and see if in table if not
 */
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Load Subjects</h1>
        <p>
        <input type="button" value = "Refresh" onclick="history.go(0)" />
        </p>
      </div>
    </BasicLayout>
  )
}

/*

return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Load Subjects</h1>
        <p>

          <Button
            variant='primary'
            onClick={update()}
            data-testid="update_Admin_LoadSubjPage"
          >
            Update
          </Button>
        </p>
      </div>
    </BasicLayout>
  )
}


*/