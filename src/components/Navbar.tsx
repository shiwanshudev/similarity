import { getServerSession } from "next-auth";
import Link from "next/link";

const Navbar = async ({}) => {
  const session = await getServerSession();

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 h-20 right-0 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container mx-auto max-w-7xl w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variants: "link" })}>
          Text Similarity 1.0
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
          <Link
            href="/documentation"
            className={buttonVariants({ variants: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variants: "ghost" })}
                href={"/dashboard"}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
