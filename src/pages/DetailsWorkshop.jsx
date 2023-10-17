import React from "react";

function DetailsWorkshop() {
  return (
    <div className="px-32 mb-6">
      <div className="card lg:card-side bg-base-100 shadow-xl my-32 px-32 py-4">
        <figure className="w-[288px]">
          <img src={"/images/doodleArt.jpg"} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Doodle Art</h2>
          <div>
            <div>รุ่นที่1</div>
            <div>สถานที่ อาคารวรณสรณ์ ชั้น12A</div>
          </div>

          <div className="card-actions justify-end mt-16">
            <button className="btn btn-primary  bg-green-500 text-white">
              สมัครเรียนที่นี่เลย
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#5D5FEF]  text-white h-10 w-48 rounded-md font-medium flex items-center  justify-center cursor-pointer">
        รายละเอียด
      </div>

      <div className=" card lg:card-side bg-base-100  my-12  px-24 border-solid border-2 border-indigo-600">
        <div className="card-body">
          <h2 className="card-title">Dooddle Art</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis facere eaque sit eum id eos nihil porro, nisi molestias quod
            quo, itaque reprehenderit suscipit. Sit eligendi dignissimos dolore
            libero distinctio reiciendis tempora. Ducimus vero non labore
            dolorem quod animi, vitae voluptatibus placeat illo reiciendis
            delectus quae magnam voluptatum eaque nesciunt officia unde tempora
            saepe quisquam! Maiores adipisci at accusantium facere, eos quod. Et
            iste eum quis hic consequatur perferendis blanditiis repellat amet,
            dolor provident vitae sapiente veniam corrupti harum nulla soluta
            assumenda distinctio. Fuga optio ab repudiandae fugiat dolor debitis
            ut hic quisquam officiis, unde ullam. Quae, veniam deleniti.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsWorkshop;
