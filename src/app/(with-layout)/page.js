import Image from "next/image";
import image1 from "@/assets/image (1).jpg";
import Categories from "../components/HomePage/Categories";
import PopularProducts from "../components/HomePage/PopularProducts";
import { Suspense } from "react";

export const revalidate = false;

const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Categories></Categories>
      <Suspense
        fallback={
          <h1 className="text-center font-bold text-2xl">Loading....</h1>
        }
      >
        <PopularProducts></PopularProducts>
      </Suspense>
      {/* <Image width={600} height={385} src={image1} alt="" /> */}
      {/* <Image width={600} height={385} src={image1} placeholder="blur" alt="" /> */}
      <Image
        placeholder="blur"
        width={600}
        height={385}
        src="/image (3).jpg"
        blurDataURL="data:image/webp;base64,UklGRlgEAABXRUJQVlA4WAoAAAAgAAAAygAAhgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggagIAALAVAJ0BKssAhwA+7WyrUL+rKSOo1gxr8B2JZW7gN2jr8eYU06D1alH0/4tmFTSFVAKcAJFKGOTMiRisyYK0bfGb7YB4bNuVCskWxHU680ij8XfuLAThsIJgW3hkLAHpeCD/e3Z00DGuzrV7Y3mPK34vukE3pEREN/V9iiYuSNlSkBrbUSSoIVmhPAGOKEre792riEMzya7O3H1hWFjHfEZV0suLavbpxp50iCag3rQDntj1B9oAAP6yL/7U9j+777v/5Bj+Cv60No1DrtpJ21u4IgO2FT9y9beXqwcgBMmSq7eYVjCQUzuazNwSO5wKB3b0kLcXvXvzQcMp36hvdNwg1lyLhh+n/N3YnkuplijbGo9C2/U6xoVAsZmvYU0Okn+gYS8tiQkVSdgOHQhqMeC/f8L62UdBr2ppCG1VLJ8FRuuG5ihGjtAVZiYvtHaVTm/dV4RnBLzXoxN+tWklURKzYKCb6ah3Rf/nG4oqAPktElbubh8PjrfRB+hC/b3W1uoWepn/zsMxJjeIMhkFrVVE404IN/U20tlee4wZJFKBGdlUBMWFcNt/j2NfzMhEzmIC31Ml5j1HdxEo+OvoA9SYeeTOvAnIbkSjTHCQIHhV8zp1VBmvkRLLzvgsBhcScbO6gDmENutgyqAgIvDnhTVctgrRXvjE9BEcK6n0O2mlItldKYWK3TpcTotsz5fx++aWXx4rQkeNVr5/iurBwFv3IuHmLwNf4FB59pPA6yIdKPvNqVK1CCQX7WHMKtj6ShEhhunb/a9svuTmxllPHQ5KptI2ZD1XxrcUsWJVhbsrpVnBiURfMnZwAA=="
        alt=""
      />
      {/* <Image
        width={600}
        height={385}
        src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      /> */}
    </main>
  );
};
export default Home;
