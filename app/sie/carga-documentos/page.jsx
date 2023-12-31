import FileUpload from "@/components/FileUpload";
import MaintenanceNotice from "@/components/MaintenanceNotice";
import SieLayout from "@/components/SieLayout";
import React from "react";

const page = () => {

  return (
    <SieLayout>
      <section className="mx-auto mt-8 max-w-7xl h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-4 lg:gap-y-10 items-center">
          <FileUpload title={"Acta de nacimiento"} type={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            asperiores laborum natus dignissimos nobis architecto quo, culpa
          </FileUpload>
          <FileUpload title={"Certificado bachillerato"} type={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            asperiores laborum natus dignissimos nobis architecto quo, culpa
          </FileUpload>
          <FileUpload title={"Contrato estudiante"} type={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            asperiores laborum natus dignissimos nobis architecto quo, culpa
          </FileUpload>
          <FileUpload title={"Formato CURP"} type={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero
            asperiores laborum natus dignissimos nobis architecto quo, culpa
          </FileUpload>
        </div>
      </section>
    </SieLayout>
  );
};

export default page;