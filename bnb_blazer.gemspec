require_relative 'lib/bnb_blazer/version'

Gem::Specification.new do |spec|
  spec.name          = "bnb_blazer"
  spec.version       = BnbBlazer::VERSION
  spec.authors       = ["Joe"]
  spec.email         = ["pickertjoe@gmail.com"]

  spec.summary       = "Customized branding of the Blazer gem for BNB projects"
  spec.description   = "Customized branding of the Blazer gem for BNB projects"
  spec.homepage      = "https://github.com/brandnewbox/bnb_blazer"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.7.0")

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/brandnewbox/bnb_blazer"

  spec.add_dependency "blazer", "= 2.6.5"
  spec.add_dependency "sassc", "~> 2.0"
  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  # spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
  #   `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  # end

  spec.files = Dir["{app,config,db,lib}/**/*", "Rakefile", "README.md"]
end
