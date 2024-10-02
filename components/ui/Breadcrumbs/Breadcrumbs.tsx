// import { Breadcrumbs } from "@nextui-org/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const BreadcrumbComponent = () => {
//   const pathName = usePathname();

//   // Dividimos la ruta actual en partes
//   const pathSegments = pathName.split("/").filter((segment) => segment);

//   // Capitalizar función
//   const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

//   // Creamos un array para ir generando los links a las rutas
//   const breadcrumbItems = pathSegments.map((segment, index) => {
//     const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
//     const isLast = index === pathSegments.length - 1;

//     return (
// 		<Link href={path} key={segment} passHref>
// 		  <a
// 			style={{
// 			  textDecoration: isLast ? "none" : "underline",
// 			  cursor: isLast ? "default" : "pointer",
// 			  color: isLast ? "#000" : "#0070f3",
// 			}}
// 		  >
// 			{/* Verifica si esto se está renderizando */}
// 			{capitalize(segment) || 'Segmento vacío'}
// 		  </a>
// 		</Link>
// 	  );
//   });

//   return (
//     <Breadcrumbs>
//       <Link href="/" passHref>
//         <a style={{ textDecoration: "none", color: "#0070f3" }}>Home</a>
//       </Link>
//       {breadcrumbItems}
//     </Breadcrumbs>
//   );
// };

// export default BreadcrumbComponent;
