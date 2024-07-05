module Blazer
  class << self 
    attr_accessor :client_logo
  end
  self.client_logo = nil
  Blazer.client_logo = Blazer.settings["client_logo"]
end
