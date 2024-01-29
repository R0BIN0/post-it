import { useDispatch, useSelector } from "react-redux";
import { IAppDispatch, IRootState } from "../../redux/store";
import { useEffect, useRef } from "react";
import { removeBanner } from "../../redux/reducers/bannerReducer";

export const useBanner = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();
  const items = useSelector((s: IRootState) => s.banner.items);

  // Ref
  const ids = useRef<string[]>([]);

  useEffect(() => {
    handleNewItem();
  }, [items]);

  const handleNewItem = () => {
    items.forEach((i) => {
      if (ids.current.includes(i.id)) return;
      const st = setTimeout(() => {
        dispatchCtx(removeBanner(i.id));
        clearTimeout(st);
      }, 5000);
    });
  };

  const handleClose = (id: string) => dispatchCtx(removeBanner(id));

  return { items, handleClose };
};
