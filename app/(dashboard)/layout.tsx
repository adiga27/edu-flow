
const HomeLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <main className="h-full">
      {children}
    </main>
   );
}
 
export default HomeLayout;