import React from "react";
import { Formik } from "formik";

function AppForm({ children, ...props }) {
  return <Formik {...props}>{() => <>{children}</>}</Formik>;
}

export default AppForm;
