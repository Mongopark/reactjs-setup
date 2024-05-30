import { initialLoginFieldState, loginFields } from '../model/fields.ts';
import { loginValidator } from '../model/validators.ts';
import { useFormik } from 'formik';
import { AuthRequest } from '../model';
import { Link } from 'react-router-dom';
import { useAuthAction } from '../slice';

export default function AdminForm(props: {toggleRegister: ()=>void;}) {
  const fields = loginFields;

  const { authenticate, loading } = useAuthAction();

  const formik = useFormik<AuthRequest>({
    initialValues: initialLoginFieldState,
    validationSchema: loginValidator,
    onSubmit: (values) => authenticate(values)
  });

  return (
    <section>
      <h1 className="text-2xl font-bold text-center mt-10">Welcome back 👋🏼 Login Here</h1>
      <p className="text-center text-sm mb-7 lg:mb-[3.75rem]">New to this platform?<span className="text-center text-primary underline text-sm mb-7 lg:mb-[3.75rem] cursor-pointer" onClick={()=>props.toggleRegister()}> Register Here</span></p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:gap-5 gap-3">
          {fields.map((field) => (
            <label key={field.id} className="form-control">
              <span className="label label-text">{field.label}</span>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className={`w-full input input-bordered flex items-center gap-2 ${
                  formik.touched[field.id] && formik.errors[field.id] && 'input-error'
                }`}
                value={formik.values[field.id]}
                onChange={formik.handleChange}
              />
              {formik.touched[field.id] && formik.errors[field.id] ? (
                <span className="label label-text-alt">{formik.errors[field.id]}</span>
              ) : null}
            </label>
          ))}
        </div>
        <div className="md:mt-4 mt-3 flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center text-xs">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="checkbox checkbox-primary w-4 h-4 rounded-none"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link className="btn btn-sm btn-ghost text-xs lg:text-sm" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-12 w-full"
          disabled={loading || !(formik.isValid && formik.dirty)}
        >
          Login {loading && <span className="loading loading-spinner"></span>}
        </button>
      </form>
    </section>
  );
}
