import { FormRow,FormRowSelect, Alert } from '../../Components/Index'
import { useAppContext } from '../../Context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { CREATE_JOB_ERROR } from '../../Context/actions'
const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    if(isEditing){

      return
    }
    createJob()
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({name,value})
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'} </h3>
        {showAlert && <Alert />}

        {/* position */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />

           {/* job status */}
           <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} />
           
          {/* job type */}
 
          <FormRowSelect name='jobType' labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />

          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button className="btn btn-block" onClick={(e)=>{
              e.preventDefault()
              clearValues()

              console.log('hello')}}>clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob