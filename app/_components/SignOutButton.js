import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "@/app/_lib/actions";
import { useAuth } from "@/app/_components/AuthContext";

function SignOutButton() {
  const { resetAuthState } = useAuth();
  return (
    <button
      className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100"
      onClick={() => {
        signOutAction();
        resetAuthState();
      }}
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
