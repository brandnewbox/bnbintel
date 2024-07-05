require "blazer"
module BnbBlazer
  class Engine < ::Rails::Engine
    isolate_namespace BnbBlazer

    initializer "blazer" do |app|
      app.config.assets.precompile << "bnb_blazer/application.js"
      app.config.assets.precompile << "bnb_blazer/application.css"
      app.config.assets.precompile << "bnb_blazer/bnb_intel_logo.png"
      app.config.assets.precompile << "bnb_blazer/bnb_intel_logo_alt.png"
      app.config.assets.precompile << "bnb_blazer/bnb_box.svg"
    end
  end
end