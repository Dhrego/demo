export default function useErroModal() {
  const [errorMsg, setErrorMsg] = useState("");
  return { errorMsg, setErrorMsg };
}
