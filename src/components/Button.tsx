type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_blue";
};

type ReadMoreProps = {
  type: "button";
};

type GetVoucherProps = {
  type: "button";
};

type WriteReviewProps = {
  type: "button";
};
import React from "react";

export const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button className="Book_btn" type={type}>
      <label>{title}</label>
    </button>
  );
};

export const ReadMore = ({ type }: ReadMoreProps) => {
  return (
    <button className="readmore_btn" type={type}>
      <label>Read More</label>
    </button>
  );
};

export const GetVoucher = ({ type }: GetVoucherProps) => {
  return (
    <button className="getvoucher_btn flex items-center " type={type}>
      <label>Get Voucher </label>
    </button>
  );

};

export const WriteReview = ({ type }: WriteReviewProps) => {
  return (
    <button className="review_btn flex items-center " type={type}>
      <label>Write a Review </label>
    </button>
  );

};

