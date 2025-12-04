import React from "react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 text-gray-900 ">
      <div
        className="max-w-4xl mx-auto text-center 
        "
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
          <strong>
            I’m a full-stack developer with a deep passion for blockchain
            engineering
          </strong>{" "}
          especially building smart contracts with{" "}
          <span className="text-[#9b785f] font-bold">Solidity</span> and
          creating fast, efficient systems with{" "}
          <span className="text-[#9b785f] font-bold">Rust</span>. My work is
          centered around improving developer workflows and bringing more{" "}
          <strong>reliability</strong>, <strong>clarity</strong>, and{" "}
          <strong>automation</strong> to the blockchain space. I enjoy turning
          complex technical ideas into clean,{" "}
          <strong>scalable solutions</strong>, whether that’s smart contract
          architectures, indexing pipelines, or full-stack dApps.
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          When I’m not building, I’m studying new blockchain tooling, exploring
          emerging protocols, and continually leveling up my Solidity and Rust
          skills.
        </p>
      </div>
    </section>
  );
}
