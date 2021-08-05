import { FormikProvider, useFormik } from 'formik'

const index = () => {

  const form = useFormik({
    initialValues: {
      message: '',
      expiresIn: 10,
    },
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <h1>Flash Message</h1>
      <form onSubmit={form.handleSubmit}>
        <textarea onChange={form.handleChange} name='message' cols="30" rows="10" placeholder="Type your private message"></textarea>
        Expires in:
        <select onChange={form.handleChange} name='expiresIn'>
          <option value="30">30 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="300">5 minutes</option>
          <option value="600">10 minutes</option>
        </select>

        <button type="submit">Send Flash Message</button>
      </form>
      <pre>{JSON.stringify(form.values)}</pre>
    </>
  )
}

export default index;